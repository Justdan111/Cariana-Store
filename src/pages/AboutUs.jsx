
import about from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg-slate-50 text-black flex flex-col items-center py-12 px-4 ">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col lg:flex-row  lg:space-x-8">
          <div className="flex-1 mb-8 xlg:mb-10">
            <img
              src={about}
              alt=""
              className="w-full rounded-lg max-h-xl "
            />
          </div>
          <div className="flex-1">
            <p className="text-xl mb-4">
              <strong>Welcome to Cariana</strong>
            </p>
            <p className="mb-4">
              At Cariana, we believe that fashion is a form of self-expression, a way to tell your story without words. Established with a passion for unique styles and quality craftsmanship, Cariana is your one-stop destination for exquisite clothing and jewelry that speaks to your individuality.
            </p>
            <p className="text-xl mb-4">
              <strong>Our Story</strong>
            </p>
            <p className="mb-4">
              Cariana was born from a desire to create a brand that offers more than just products. We wanted to build a community where fashion enthusiasts can find pieces that resonate with their personal style and values. Our journey began with a small collection of handpicked items, and over the years, we've grown into a beloved brand known for our commitment to quality, style, and customer satisfaction.
            </p>
            <p className="text-xl mb-4">
              <strong>What We Offer</strong>
            </p>
            <p className="mb-4">
              <strong>Clothing:</strong> Our clothing line features a diverse range of styles, from chic everyday wear to elegant evening attire. Each piece is carefully curated to ensure it meets our high standards for quality and design. Whether you're looking for a cozy sweater for the fall or a stunning dress for a special occasion, Cariana has something for everyone.
            </p>
            <p className="mb-4">
              <strong>Jewelry:</strong> Our jewelry collection is designed to complement our clothing line perfectly. From delicate necklaces and earrings to bold statement pieces, our jewelry is crafted with the finest materials to add a touch of elegance and sophistication to any outfit.
            </p>
            <p className="text-xl mb-4">
              <strong>Our Commitment</strong>
            </p>
            <p className="mb-4">
              At Cariana, we are committed to more than just fashion. We strive to make a positive impact on the world through sustainable practices and ethical sourcing. We work closely with our suppliers to ensure that our products are made with respect for both people and the planet. Our goal is to offer beautiful, high-quality items that you can feel good about wearing.
            </p>
            <p className="text-xl mb-4">
              <strong>Join the Cariana Community</strong>
            </p>
            <p className="mb-4">
              We invite you to join the Cariana community and discover the perfect pieces that reflect your unique style. Follow us on social media to stay updated on the latest trends, new arrivals, and exclusive promotions. We love seeing how our customers style their Cariana finds, so be sure to tag us in your photos!
            </p>
            <p className="mb-4">
              Thank you for choosing Cariana. We look forward to helping you express your style and celebrate your individuality.
            </p>
            <p className="text-xl mb-4">
              <strong>Contact Us</strong>
            </p>
            <p className="mb-4">
              If you have any questions, feedback, or just want to say hello, don't hesitate to reach out to us. Our friendly customer service team is always here to help.
            </p>
            <p className="mb-4">
              Email: <a href="mailto:support@cariana.com" className="underline text-blue-400">support@cariana.com</a>
            </p>
            <p className="mb-4">
              Phone: <a href="tel:1-800-123-4567" className="underline text-blue-400">1-800-123-4567</a>
            </p>
            <p className="text-center mt-8">
              Stay stylish, <br /> The Cariana Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
