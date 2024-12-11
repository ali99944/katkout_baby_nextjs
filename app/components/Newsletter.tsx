
const Newsletter = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#FF9D1B]/10 rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#4A1D1F] mb-4">اشترك في نشرتنا البريدية</h2>
              <p className="text-[#4A1D1F]/80 mb-8">احصل على آخر العروض والتخفيضات مباشرة على بريدك</p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="px-6 py-3 rounded-lg flex-1 max-w-md text-right border border-gray-200"
                />
                <button
                  type="submit"
                  className="bg-[#FF9D1B] text-white px-8 py-3 rounded-lg font-semibold shadow"
                >
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  
  