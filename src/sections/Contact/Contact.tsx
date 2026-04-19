import { MailOutlined } from '@ant-design/icons'

export function Contact() {
  return (
    <section id="contact" className="bg-background py-28">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        <h2 className="font-rubik-sans font-bold text-4xl md:text-5xl text-text">Let's connect.</h2>
        <p className="font-mono text-sm text-text-muted max-w-md leading-relaxed">
          Have a question, want to share ideas, or just talk about backend engineering? My inbox is always open — feel
          free to reach out.
        </p>
        <a href="mailto:nvqhung93@gmail.com">
          <button className="inline-flex items-center gap-2 bg-btn text-btn-text font-mono font-semibold text-sm px-7 py-3 rounded-full shadow-button transition duration-200 ease-in-out hover:opacity-90 hover:scale-105 mt-2">
            Say Hello <MailOutlined />
          </button>
        </a>
      </div>
    </section>
  )
}
