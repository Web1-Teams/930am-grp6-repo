import React from "react";
import Footer from "../componnents/footer"; // تصحيح المسار
import Header from "../componnents/header"; // تصحيح المسار
import { Link } from "react-router-dom"; // استيراد Link بشكل صحيح
import '../patterns.css'; // تصحيح المسار
import {
  faStream,
  faHome,
  faBrain,
  faUserMd,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";

// تعريف مكوّن PatternItem (إذا كان غير موجود)
const PatternItem = ({ pattern, index }) => (
  <div className="pattern-item" key={index}>
    <img src={pattern.image} alt={pattern.title} />
    <h3>{pattern.title}</h3>
    <p>{pattern.description}</p>
    <p>{pattern.description2}</p>
    <Link to={pattern.link}>اذهب</Link>
  </div>
);

// مكوّن القائمة
const PatternsList = ({ patterns }) => {
  if (!patterns || patterns.length === 0) {
    return <p>لا توجد بيانات لعرضها.</p>;
  }

  return (
    <div className="patterns-list">
      {patterns.map((pattern, index) => (
        <PatternItem key={index} pattern={pattern} index={index} />
      ))}
    </div>
  );
};

// قائمة الأنماط
const patterns = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/022/807/383/large_2x/farm-fantasy-backdrop-concept-art-realistic-illustration-background-with-generative-ai-free-photo.jpg",
    title: "نظرية المزرعة",
    description: "هي الأداة الوحيدة التي ستغير حياتك حتى وانش7ش فشلت سابقا",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    
      link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://ahli.com/wp-content/uploads/2021/02/Empowerment-1024x595.png",
    title: "كن مبادراً",
    description: "تملك زمام حياتك عن طريق إدراك أن قراراتك هي العامل الأساسي",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },

  {
    image:
      "https://i.ytimg.com/vi/1aAaq5loZ1g/maxresdefault.jpg",
    title: "ابدأ بالأهم قبل المهم",
    description: "تحديد أولويات العمل الذي تهدف إلى تحقيقه",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://static.sayidaty.net/styles/1375_scale/public/2023-11/302098.jpg",
    title: "العادات الذرية",
    description: "تغيير العادات تدريجيًاو بناء أنظمة فعالة",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://www.almrsal.com/wp-content/uploads/2018/11/%D8%A7%D9%84%D8%AA%D9%81%D9%83%D9%8A%D8%B1-1.png",
    title: " تفكير مكسب",
    description: "مبادئ المنفعة المتبادلة",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://a5dr-wp.fra1.cdn.digitaloceanspaces.com/bookidea/2020/11/0-6.jpg",
    title: "السعي لأن تفهَم أولا",
    description: "مبادئ التفاهم المتبادل",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://www.almrsal.com/wp-content/uploads/2023/03/%D9%85%D9%86-%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D8%AA%D9%81-%D9%88%D8%A7%D9%84%D8%B9%D8%B7%D8%A7%D8%A1-%D9%81%D9%8A-%D8%B1%D9%85%D8%B6%D8%A7%D9%86.jpg",
    title: "التآزر والتكاتف",
    description: "مبادئ التعاون الخلاق",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.ivLXk4hJ6PDIMJ1U7yrGhwHaEK?rs=1&pid=ImgDetMain",
    title: "التجديد المتوازن",
    description: " يركز على التوازن الذاتي للتجديد",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
  {
    image:
      "https://th.bing.com/th/id/R.9b7b4fa89f2b6892d94451a19cd91da8?rik=bPNJ1rYFU2oFFA&pid=ImgRaw&r=0",
    title: " التفكير الغني",
    description: "استثمر في بناء الثروة عبر التعليم المالي",
    description2:
      "نظرية المزرعة هي استعارة قدمها ستيفن كوفي في كتابه العادات السبع للناس الأكثر فعالية للتأكيد على أهمية العمل المستمر والمتوازن لتحقيق النجاح .",
    Essay:
      "في كتابه العادات السبع للناس الأكثر فعالية، يقدم ستيفن كوفي نظرية المزرعة كاستعارة عميقة تسلط الضوء على أهمية الجهد المستمر والالتزام بالقوانين الطبيعية لتحقيق النجاح.\nيشبه كوفي الحياة بالمزرعة، حيث يتطلب نجاح الحصاد المرور بمراحل حتمية من الحرث والزرع والرعاية والصبر.\nلا يمكن للمزارع أن يزرع البذور في اللحظة الأخيرة ويتوقع محصولًا مثاليًا، بل عليه العمل بانتظام وفقًا لخطوات منهجية تضمن النتائج المرجوة.\nتعكس النظرية قيمًا رئيسية مثل الصبر، الالتزام، والعمل المتواصل.\nتوضح أن النجاح الحقيقي لا يتحقق عن طريق الجهد اللحظي أو الحظ العابر، بل هو نتيجة مباشرة لتطوير عادات صحية وأفعال مدروسة على المدى الطويل.\nمثلما تتطلب المزرعة وقتًا للنمو والنضج، فإن الحياة تتطلب أيضًا وقتًا وتخطيطًا لتحقيق الأهداف.\nالعجلة أو إهمال الخطوات الأساسية يمكن أن يؤدي إلى الفشل، بينما الالتزام بالقوانين الطبيعية للحياة يثمر دائمًا.\nتأتي أهمية نظرية المزرعة من تطبيقاتها العملية في الحياة اليومية.\nسواء كنت تسعى لتحقيق أهداف شخصية أو مهنية، فإن الالتزام بالعمل التدريجي والمنتظم يعزز احتمالات النجاح.\nيذكّر كوفي القراء بأن العادات الجيدة التي نغرسها اليوم هي البذور التي ستنمو لتصبح ثمار النجاح في المستقبل.\nالنظرية ليست فقط دعوة للتفكير الإستراتيجي، بل أيضًا إلهام للاستمرار في العمل بتوازن وصبر، بغض النظر عن التحديات التي تواجهنا.",
    link: "https://www.youtube.com/embed/LXhXFl_2Unw",
  },
];

const navLinks = [
  { path: "/", label: "الرئيسية", icon: faHome },
  { path: "/discorders", label: "الأمراض النفسية", icon: faBrain },
  { path: "/patterns", label: "الأنماط الفكرية", icon: faStream },
  { path: "/discorders", label: "الاضطرابات النفسية", icon: faUserMd },
  { path: "/podcasts", label: "البودكاستات", icon: faPodcast },
];

// مكوّن الصفحة الرئيسية
const Patterns = () => (
  <>
  <div lang="ar" dir="rtl">
        <Header
      logoSrc={"logo3.png"}
      tagline="نافذتك لفهم النفس والعقل"
          navLinks={navLinks}
        />
        <section className="hero">
        <h2>الأنماط الفكرية</h2>
        <p>استمع إلى أفضل الحلقات التي تتناول موضوعات الصحة النفسية، تطوير الذات، والتوازن الحياتي.</p>
      </section>
     <PatternsList patterns={patterns} />
      </div>
      <Footer />
  </>

);

export default Patterns;