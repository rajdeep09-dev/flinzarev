import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-primary pb-32 pt-12 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center">
            <div className="mb-2 text-sm md:text-base text-secondary uppercase font-semibold">
              About us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Discover Revento
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience growth through innovative digital marketing
              designed to reach, inspire, and deliver results.
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                At Revento, we believe that every brand has the potential to{' '}
                <span className="text-secondary">achieve extraordinary results</span>
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our mission and vision</h3>
                <p className="text-gray-600 mb-4">
                  At Revento, we are more than a digital marketing agency—we are your growth partners.
                  Founded with a mission to transform ideas into impactful results, we specialize in
                  delivering innovative strategies that drive measurable success.
                </p>
                <p className="text-gray-600 mb-4">
                  With a team of seasoned experts and cutting-edge tools, we help businesses of all
                  sizes unlock their potential in the digital landscape.
                </p>
                <p className="text-gray-600">
                  With years of experience and a track record of delivering measurable results, we craft
                  strategies that work. From startups to established enterprises, we've helped businesses
                  across industries thrive in the digital landscape.
                </p>
              </div>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all"
                >
                  Get in touch
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-accent/10 p-6 rounded-lg absolute -top-8 -left-8 z-0">
                <div className="text-2xl md:text-3xl font-bold text-accent flex items-center gap-2">
                  400+
                  <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                    <path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L7.5 3.20711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645ZM7.5 12.9929L11.1464 9.34645C11.3417 9.15118 11.6583 9.15118 11.8536 9.34645C12.0488 9.54171 12.0488 9.85829 11.8536 10.0536L7.85355 14.0536C7.75979 14.1473 7.63261 14.2 7.5 14.2C7.36739 14.2 7.24021 14.1473 7.14645 14.0536L3.14645 10.0536C2.95118 9.85829 2.95118 9.54171 3.14645 9.34645C3.34171 9.15118 3.65829 9.15118 3.85355 9.34645L7.5 12.9929Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-accent/80 text-sm">Successful Campaigns have Launched in Industries</p>
              </div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/featured-project-1.png"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-secondary font-semibold text-sm uppercase mb-3">About Us</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.5V8.25M12 8.25L15.75 12M12 8.25L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Innovation</h3>
              <p className="text-gray-600">Staying ahead with cutting-edge strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V3.75M6.75 6.75H17.25M3.75 14.25H5.25M5.25 11.25H6.75M3.75 17.25H5.25M18.75 14.25H20.25M17.25 11.25H20.25M18.75 17.25H20.25M12 21.75C10.9542 21.7451 9.94324 21.3404 9.17139 20.6244C8.39955 19.9085 7.92216 18.9297 7.83113 17.8879C7.7401 16.8461 8.04126 15.8096 8.67606 14.9801C9.31087 14.1505 10.2316 13.5927 11.2604 13.4094C11.5917 13.3562 11.9271 13.3295 12.2604 13.3295C13.3062 13.3343 14.3172 13.739 15.089 14.455C15.8608 15.1709 16.3382 16.1497 16.4293 17.1915C16.5203 18.2333 16.2191 19.2698 15.5843 20.0994C14.9495 20.9289 14.0288 21.4867 13 21.6701C12.6687 21.7232 12.3333 21.7499 12 21.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Transparency</h3>
              <p className="text-gray-600">Building trust through open communication.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Results-Driven</h3>
              <p className="text-gray-600">Focusing on measurable outcomes that matter.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-highlight/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19.1288C15.9941 18.4828 16.7913 17.5599 17.2936 16.4768C17.7959 15.3938 17.9862 14.1887 17.845 13C18.5012 13 19.1305 12.7361 19.5979 12.2678C20.0653 11.7995 20.3284 11.1689 20.3284 10.5116C20.3284 9.85431 20.0653 9.22376 19.5979 8.75547C19.1305 8.28717 18.5012 8.02326 17.845 8.02326C17.9862 6.83455 17.7959 5.62944 17.2936 4.54641C16.7913 3.46338 15.9941 2.54045 15 1.89441M15 19.1288C14.0059 19.7747 12.8612 20.1141 11.6883 20.1157C10.5155 20.1173 9.36964 19.781 8.37349 19.1377M15 19.1288C15 19.1288 13.3333 16.6395 13.3333 10.5116C13.3333 4.38372 15 1.89441 15 1.89441M15 1.89441C14.0059 1.24837 12.8612 0.908972 11.6883 0.907369C10.5155 0.905766 9.36964 1.24206 8.37349 1.8853M8.37349 1.8853C7.37939 2.53128 6.58235 3.45408 6.0796 4.53701C5.57685 5.61995 5.38561 6.8254 5.52564 8.01453C4.86941 8.01453 4.24008 8.27844 3.77271 8.74673C3.30533 9.21503 3.04218 9.84558 3.04218 10.5029C3.04218 11.1601 3.30533 11.7907 3.77271 12.259C4.24008 12.7273 4.86941 12.9912 5.52564 12.9912C5.38456 14.1799 5.57487 15.3851 6.07712 16.4682C6.57938 17.5513 7.37663 18.4742 8.37349 19.1203M8.37349 1.8853C8.37349 1.8853 10.04 4.37459 10.04 10.5025C10.04 16.6303 8.37349 19.1203 8.37349 19.1203" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Collaboration</h3>
              <p className="text-gray-600">Partnering with clients for shared success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Partner with Revento & unlock the{' '}
              <span className="text-secondary">full potential</span>?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all w-full sm:w-auto"
                >
                  Get in touch
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/arc-image.png"
            alt="Background arc"
            width={600}
            height={600}
            className="absolute -bottom-10 -right-10 opacity-5"
          />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-secondary opacity-5"></div>
          <div className="absolute top-20 right-1/4 w-8 h-8 rounded-full bg-accent opacity-10"></div>
        </div>
      </section>
    </div>
  );
}
