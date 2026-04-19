import { DownOutlined } from '@ant-design/icons'

import avatarImg from '../../assets/avatar.webp'

const yearsOfExperience = new Date().getFullYear() - 2022

export function Hero() {
  return (
    <section id="hero" className="min-h-dvh flex flex-col justify-center pt-14 bg-background">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 py-20">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-rubik-sans font-bold text-4xl md:text-5xl leading-tight text-text">
            Hi, I'm Hung Nguyen.
          </h1>
          <p className="font-mono text-base text-text-muted max-w-md leading-relaxed">
            Backend engineer with {yearsOfExperience}+ years of experience building high-performance APIs and
            distributed systems, from monolith to microservices.
          </p>
          <div>
            <a href="#about">
              <button className="inline-flex items-center gap-2 bg-btn text-btn-text text-sm font-mono font-semibold px-6 py-3 rounded-full shadow-button transition duration-200 ease-in-out hover:opacity-90 hover:scale-105">
                Explore More <DownOutlined className="text-xs" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-card-border shadow-card">
            <img src={avatarImg} alt="Hung Nguyen" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}
