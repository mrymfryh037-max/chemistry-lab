// netlify/functions/claude.js
// يدعم Claude API و Gemini API
// المفتاح مخفي على السيرفر — المستخدم لا يراه

exports.handler = async (event) => {

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // معالجة CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { question, systemType } = JSON.parse(event.body);

    const SYSTEM_PROMPTS = {
      balancer: `أنت خبير كيميائي متخصص في موازنة المعادلات الكيميائية.
عند استقبال عناصر أو معادلة كيميائية:
1. إذا أُعطيت عناصر فقط (مثل Fe, O): اذكر أشهر مركب ناتج وأي احتمالات أخرى
2. اكتب المعادلة الكيميائية الكاملة (متفاعلات → نواتج)
3. وازن المعادلة رياضياً واذكر المعاملات
4. اذكر نوع التفاعل (تكوين، تحلل، إحلال، احتراق، تعادل، ترسيب، أكسدة-اختزال)
5. اشرح التفاعل بإيجاز
اكتب المعادلات بصيغة واضحة. اجعل الإجابة منظمة ومختصرة.`,

      analyzer: `أنت خبير كيميائي متخصص في تحليل المركبات والأيونات.
عند استقبال صيغة مركب أو أيون كيميائي:
1. اذكر اسم المركب/الأيون
2. احسب الكتلة المولية بالتفصيل (كتلة كل عنصر × عدد ذراته)
3. اذكر النسبة المئوية لكل عنصر
4. إذا كان أيوناً: اذكر الشحنة ونوعه (كاتيون/أنيون)
5. اذكر الاستخدامات أو أهمية هذا المركب
اجعل الحسابات واضحة ومفصلة.`,

      stoich: `أنت مساعد كيميائي أكاديمي متخصص لطلاب الجامعة.
عند حل أي مسألة كيميائية:
1. اذكر القانون أو المبدأ المستخدم أولاً
2. اعرض المعطيات بوضوح
3. اشرح كل خطوة بالتفصيل مع المعادلات الرياضية
4. أعطِ الإجابة النهائية بوضوح مع الوحدات
5. أضف ملاحظة علمية مفيدة عند الحاجة
اجعل الإجابة منظمة ومرقّمة.`,
    };

    const systemPrompt = SYSTEM_PROMPTS[systemType] || SYSTEM_PROMPTS.stoich;
    const fullQuestion = systemPrompt + '\n\n' + question;

    // ── اختيار الـ API تلقائياً حسب المفتاح المتوفر ──
   const CLAUDE_KEY = process.env.CLAUDE_API_KEY;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

console.log("Gemini key exists: - claude.js:61", !!GEMINI_KEY);

    if (CLAUDE_KEY) {
      // Claude API
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CLAUDE_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: 'user', content: question }],
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        return { statusCode: response.status, headers, body: JSON.stringify({ error: err }) };
      }

      const data = await response.json();
      // نُرجع نفس الصيغة دائماً
      const text = data.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
      return {
        statusCode: 200, headers,
        body: JSON.stringify({ content: [{ type: 'text', text }] }),
      };

    } else if (GEMINI_KEY) {
      // Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullQuestion }] }],
            generationConfig: { maxOutputTokens: 1000, temperature: 0.3 },
          }),
        }
      );

      if (!response.ok) {
        const err = await response.text();
        return { statusCode: response.status, headers, body: JSON.stringify({ error: err }) };
      }

      const data = await response.json();
      // استخراج النص من Gemini وتحويله لنفس صيغة Claude
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (!text) return { statusCode: 500, headers, body: JSON.stringify({ error: 'لم تصل إجابة من Gemini' }) };

      return {
        statusCode: 200, headers,
        body: JSON.stringify({ content: [{ type: 'text', text }] }),
      };

    } else {
      return {
        statusCode: 500, headers,
        body: JSON.stringify({ error: 'لم يتم إعداد مفتاح API — أضف CLAUDE_API_KEY أو GEMINI_API_KEY في Netlify' }),
      };
    }

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
