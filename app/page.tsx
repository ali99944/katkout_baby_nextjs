import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Categories from './components/Categories'
import NewArrivals from './components/NewArrivals'
import SpecialOffers from './components/SpecialOffers'
import Features from './components/Features'
import Newsletter from './components/NewsLetter'

async function getNewArrivals() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))
  return [
    {
      id: 1,
      title: "فستان أطفال مزركش",
      price: "199",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"
    },
    {
      id: 2,
      title: "طقم أطفال قطن",
      price: "149",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 3,
      title: "بيجامة أطفال",
      price: "99",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 4,
      title: "جاكيت أطفال",
      price: "299",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]
}

async function getSpecialOffers() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100))
  return [
    {
      id: 1,
      title: "خصم 30% على ملابس الصيف",
      description: "تسوق الآن وأحصل على خصم حصري",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "عروض العودة للمدارس",
      description: "أحدث تشكيلات ملابس المدرسة",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    }
  ]
}

export default async function Home() {
  const newArrivals = await getNewArrivals()
  const specialOffers = await getSpecialOffers()

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <NewArrivals products={newArrivals} />
        <SpecialOffers offers={specialOffers} />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

