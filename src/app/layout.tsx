import type { Metadata } from "next";
import { Geist_Mono, Kantumruy_Pro, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const kantumruy = Kantumruy_Pro({
  variable: '--font-kantumruy-pro',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Thana',
    default: 'Thana'
  },
  keywords:'Skirt For Women, Trouser For Men, Kid Clothes, E-commerce, products, selling product',
  description: "M2 is the best platform for selling products in ecommerce modern website for Cambodian people.",
  openGraph: 
    {
      title:'Thana x who' ,
      description: 'Thana shop smile all.',
      images:'/thumbnail.jpg',
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", kantumruy.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
         <h1 className="bg-red-500">Navbar</h1>
        <Suspense fallback={<h1 className="bg-red-500 text-7xl text-center">Loading...</h1>}>
          {children}
        </Suspense>
        {/* <h2 className="bg-blue-500">Footer</h2> */}
      </body>
    </html>
  );
}





// import type { Metadata } from "next";
// import { Geist_Mono, Kantumruy_Pro, Geist } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import { Suspense } from "react";

// const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// const kantumruy = Kantumruy_Pro({
//   variable: '--font-kantumruy-pro',
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // 1. Define your domain for absolute URL resolution
// const siteUrl = "https://thana-x-whos.vercel.app/product";
// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),
//   title: {
//     template: '%s | Thana',
//     default: 'Thana',
//   },
//   keywords: 'Skirt For Women, Trouser For Men, Kid Clothes, E-commerce, products, selling product',
//   description: "M2 is the best platform for selling products in ecommerce modern website for Cambodian people.",
//   openGraph: {
//     title: 'Thana x who',
//     description: 'Thana shop smile all.',
//     url: siteUrl,
//     siteName: 'Thana E-commerce',
//     type: 'website',
//     images: [
//       {
//         url: '/thumbnail.jpg',  
//         width: 1200,          
//         height: 630,
//         alt: 'Thana E-commerce - Smile All',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     images: ['/thumbnail.jpg'], // 👈 Fixed spelling
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html
//       lang="en"
//       className={cn("h-full", "antialiased", kantumruy.variable, geistMono.variable, "font-sans", geist.variable)}
//     >
//       <body className="min-h-full flex flex-col">
//         <h1 className="bg-red-500">Navbar</h1>
//         <Suspense fallback={<h1 className="bg-red-500 text-7xl text-center">Loading...</h1>}>
//           {children}
//         </Suspense>
//       </body>
//     </html>
//   );
// }