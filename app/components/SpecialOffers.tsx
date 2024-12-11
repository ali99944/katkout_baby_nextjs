import Link from 'next/link'
import Image from 'next/image'

const SpecialOffers = ({ offers }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#4A1D1F] text-center mb-12">عروض خاصة</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="relative rounded-lg overflow-hidden shadow"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1D1F]/90 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                <p className="text-white/90 mt-2">{offer.description}</p>
                <Link 
                  href="/offers"
                  className="inline-block bg-[#FF9D1B] text-white px-6 py-2 rounded-lg mt-4 w-fit shadow"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers

