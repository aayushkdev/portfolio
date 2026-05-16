function Footer() {
  return (
    <footer className="text-center py-[40px] text-slate-muted text-[14px]">
      <div className="hidden max-[768px]:flex justify-center gap-[25px] mt-[20px]">
        <a href="https://github.com/aayushkdev" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/icons/github.svg"
            alt="GitHub"
            width="24"
            height="24"
            className="[filter:invert(85%)_brightness(100%)_contrast(90%)] hover:[filter:invert(76%)_sepia(70%)_saturate(478%)_hue-rotate(101deg)_brightness(101%)_contrast(102%)] transition-all duration-250"
          />
        </a>
        <a href="https://linkedin.com/in/aayushkdev" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/icons/linkedin.svg"
            alt="LinkedIn"
            width="24"
            height="24"
            className="[filter:invert(85%)_brightness(100%)_contrast(90%)] hover:[filter:invert(76%)_sepia(70%)_saturate(478%)_hue-rotate(101deg)_brightness(101%)_contrast(102%)] transition-all duration-250"
          />
        </a>
        <a href="mailto:folio@aayushk.dev">
          <img
            src="/images/icons/mail.svg"
            alt="Email"
            width="24"
            height="24"
            className="[filter:invert(85%)_brightness(100%)_contrast(90%)] hover:[filter:invert(76%)_sepia(70%)_saturate(478%)_hue-rotate(101deg)_brightness(101%)_contrast(102%)] transition-all duration-250"
          />
        </a>
      </div>
      <p>Copyright and stuff</p>
    </footer>
  )
}

export default Footer
