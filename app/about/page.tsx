import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
            alt="Happy children playing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D1F]/60 to-[#FF9D1B]/40"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">نحن كتكوت بيبي</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">نصنع الابتسامات ونسج الذكريات من خلال ملابس الأطفال المميزة</p>
            <Link 
              href="#our-story"
              className="bg-white text-[#4A1D1F] px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#FF9D1B] hover:text-white transition duration-300"
            >
              اكتشف قصتنا
            </Link>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Katkout Baby store"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1F] mb-6">قصتنا: من حلم إلى حقيقة</h2>
                <p className="text-lg text-gray-700 mb-4">
                  بدأت رحلة كتكوت بيبي في عام 2010 من حلم بسيط: توفير ملابس أطفال عالية الجودة وبأسعار معقولة لكل عائلة. 
                  كانت البداية في متجر صغير في قلب المدينة، حيث كنا نخيط الملابس بأيدينا ونختار الأقمشة بعناية فائقة.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  مع مرور السنين، نما حلمنا وتوسعت عائلتنا. اليوم، أصبحنا واحدة من أكثر العلامات التجارية الموثوقة في مجال ملابس الأطفال،
                  مع وجود أكثر من 50 فرعًا في جميع أنحاء البلاد.
                </p>
                <p className="text-lg text-gray-700">
                  نحن نؤمن بأن كل طفل يستحق أن يشعر بالراحة والثقة في ملابسه. هذا الإيمان هو ما يدفعنا للابتكار المستمر
                  وتقديم أفضل ما لدينا لأطفالكم الأعزاء.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-20 bg-[#FF9D1B]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A1D1F] mb-12">التزامنا تجاه أطفالكم</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "جودة لا تضاهى",
                  description: "نستخدم أفضل الأقمشة والخامات الآمنة للبشرة الحساسة للأطفال، ونتبع أعلى معايير الجودة في التصنيع.",
                  icon: "🌟"
                },
                {
                  title: "تصاميم مبتكرة",
                  description: "نقدم تشكيلة متجددة من التصاميم العصرية والمريحة التي تناسب كل المناسبات وتعكس شخصية طفلك الفريدة.",
                  icon: "✨"
                },
                {
                  title: "استدامة وصداقة للبيئة",
                  description: "نلتزم باستخدام مواد صديقة للبيئة وممارسات إنتاج مستدامة للحفاظ على كوكبنا لأجيال المستقبل.",
                  icon: "🌿"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#4A1D1F] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A1D1F] mb-12">أثرنا في المجتمع</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Children in Katkout Baby clothes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#4A1D1F] mb-4">نحن نؤمن بقوة العطاء</h3>
                <p className="text-lg text-gray-700 mb-6">
                  في كتكوت بيبي، نؤمن بأن نجاحنا يأتي مع مسؤولية تجاه مجتمعنا. لذلك، نفخر بمبادراتنا الاجتماعية:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#FF9D1B] ml-2">✓</span>
                    <span>برنامج &quot;دفء الشتاء&quot; لتوزيع الملابس الشتوية على الأطفال المحتاجين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF9D1B] ml-2">✓</span>
                    <span>شراكة مع المدارس المحلية لتوفير الزي المدرسي للعائلات ذات الدخل المحدود</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF9D1B] ml-2">✓</span>
                    <span>برنامج تدريب وتوظيف للشباب في مجال تصميم وإنتاج ملابس الأطفال</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-[#4A1D1F]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">ماذا يقول عملاؤنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "منى السعيد",
                  comment: "جودة الملابس رائعة والتصاميم جميلة جدًا. أطفالي يحبون ارتداء ملابس كتكوت بيبي!",
                  rating: 5
                },
                {
                  name: "أحمد الفهد",
                  comment: "خدمة العملاء ممتازة والتوصيل سريع. سأستمر في الشراء من كتكوت بيبي بالتأكيد.",
                  rating: 5
                },
                {
                  name: "سارة العلي",
                  comment: "أسعار معقولة مقابل جودة عالية. أنصح بشدة بشراء ملابس الأطفال من كتكوت بيبي.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FF9D1B] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div className="mr-4">
                      <h3 className="font-semibold text-[#4A1D1F]">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#4A1D1F] to-[#FF9D1B] rounded-lg p-8 md:p-12 shadow">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">انضم إلى عائلة كتكوت بيبي</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  اكتشف تشكيلتنا الواسعة من الملابس العصرية والمريحة لأطفالك. دعنا نكون جزءًا من رحلة نمو طفلك ونصنع معًا ذكريات لا تنسى.
                </p>
                <Link 
                  href="/products"
                  className="bg-white text-[#4A1D1F] px-8 py-3 rounded-full text-lg font-semibold shadow inline-block hover:bg-[#FF9D1B] hover:text-white transition duration-300"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

