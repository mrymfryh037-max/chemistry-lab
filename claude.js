// netlify/functions/claude.js
// هذا الملف يعمل على سيرفر Netlify — المفتاح مخفي تماماً عن المستخدم

exports.handler = async (event) => {

  // السماح فقط بطلبات POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // إضافة CORS headers للسماح للموقع بالاتصال بالـ Function
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // استقبال البيانات من المتصفح
    const { question, systemType } = JSON.parse(event.body);

    // System prompts مخصصة لكل تبويب
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

    // إرسال الطلب لـ Claude API — المفتاح من متغيرات البيئة (مخفي تماماً)
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY, // ← من Netlify Environment Variables
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: SYSTEM_PROMPTS[systemType] || SYSTEM_PROMPTS.stoich,
        messages: [{ role: 'user', content: question }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return { statusCode: response.status, headers, body: JSON.stringify({ error: err }) };
    }

    const data = await response.json();
    return { statusCode: 200, headers, body: JSON.stringify(data) };

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};