import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <h1 className="text-center text-4xl">ميثاق الشفافية</h1>
      <p className="pt-8 text-gray-500">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
        طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
        يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
        برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
        إفتراضي كنموذج عن النص، وإذا قمت بإدخال في أي محرك بحث ستظهر العديد من
        المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة
        ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد
        كإدخال بعض العبارات الفكاهية إليها.
      </p>
    </section>
  );
};
