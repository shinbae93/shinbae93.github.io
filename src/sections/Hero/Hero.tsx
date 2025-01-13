import { GithubOutlined, LinkedinFilled } from '@ant-design/icons'

import avatarImg from '../../assets/avatar.jpg'
import CV from '../../assets/cv.pdf'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row-reverse text-center items-center gap-28 justify-evenly h-dvh min-h-[500px]"
    >
      <div className="relative text-center">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-96 max-w-96 h-96 max-h-96 object-cover overflow-clip rounded-full"
        />
        <span className="absolute right-0 top-0">
          <ThemeToggle />
        </span>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-5xl uppercase font-bold font-rubik-sans text-text">
          Hung Nguyen
        </h1>
        <h2 className="text-2xl uppercase font-bold text-text">Backend Engineer</h2>
        <span className="flex gap-6 justify-center">
          <a
            href="https://github.com/shinbae93"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600"
          >
            <GithubOutlined className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/nvqhung93"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600"
          >
            <LinkedinFilled className="text-3xl" />
          </a>
        </span>
        <p className="max-w-[30ch] self-center text-xl font-light text-text">
          Passionate about delivering high-quality, maintainable, and performance-driven backend solutions.
        </p>
        <a href={CV} download>
          <button className="bg-btn text-btn-text border-none rounded-2xl w-32 h-12 font-bold text-xl shadow-button transition duration-200 ease-in-out hover:shadow-lg hover:scale-105">
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}
