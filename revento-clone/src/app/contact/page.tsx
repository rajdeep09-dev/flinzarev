import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-primary pb-32 pt-12 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center">
            <div className="mb-2 text-sm md:text-base text-secondary uppercase font-semibold">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions or ready to start your next project?
              Reach out to us and our team will get back to you shortly.
            </p>
          </div>
        </div>

        {/* Background Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 text-white"
            fill="currentColor"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 -mt-20">
        <div className="container">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <PhoneCall size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <Mail size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Email</h3>
                      <p className="text-gray-600">info@revento.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <MapPin size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Address</h3>
                      <p className="text-gray-600">
                        123 Marketing St.<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                    <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-gray-300 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-gray-300 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="border-gray-300 focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Your message here..."
                      className="border-gray-300 focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
                  >
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                      <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.2031 7.95693C14.3935 7.87668 14.5 7.69762 14.5 7.50002C14.5 7.30243 14.3935 7.12337 14.2031 7.04312L1.20308 1.04312ZM4.25003 6.98918L1.48096 2.17755L12.133 7.15161C12.1403 7.1547 12.1475 7.15824 12.1545 7.16224L4.25003 6.98918ZM12.1545 7.83781C12.1475 7.84181 12.1403 7.84535 12.133 7.84844L1.48096 12.8225L4.25003 8.01087L12.1545 7.83781Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
