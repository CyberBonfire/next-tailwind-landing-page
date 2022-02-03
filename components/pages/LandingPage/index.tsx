import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { CTA } from '../../templates/CTA';
import { FAQ } from '../../templates/FAQ';
import { Prices } from '../../templates/Prices';
import { Carousel } from '../../templates/Carousel';
import { H1, H5 } from '../../atoms/Typography';

export const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Business Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <Header />
        <CTA
          title="Excellent Landing Page Template"
          description="This is an excellent template for landing page and can strongly support you to compose your landing page quickly."
        />
        <CTA
          title="Support for All Situations"
          description="When constructing any landing page, it is easy to change the theme color and other elements to easily build what you need."
          isImageRight
        />
        <Carousel
          items={[
            <H1>All in one app</H1>,
            <H1>Safety and Secure</H1>,
            <H1>Help your Business</H1>,
          ]}
        />
        <FAQ
          qas={[
            {
              question: 'How can I install?',
              answer:
                'Please visit the github page, you will find instructions',
            },
            {
              question: 'How can I test this text?',
              answer:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?',
            },
          ]}
        />
        <Prices
          priceProps={[
            {
              title: 'Free',
              description:
                'Perfect for using in a personal website or a client project.',
              price: 'Free',
              features: ['One User', 'One Project'],
            },
            {
              title: 'Basic',
              description:
                'Perfect for using in a business website or a client project.',
              price: '$6',
              features: ['Twelve User', 'Twelve Project', 'Online Support'],
            },
            {
              title: 'Pro',
              description:
                'Perfect for using in a professional website or a large-scale project.',
              price: '$24',
              features: [
                'Unlimited User',
                'Unlimited Project',
                'Unlimited Access',
                'Online & Offline Support',
              ],
            },
          ]}
        />
        <Footer />
      </main>
    </>
  );
};
