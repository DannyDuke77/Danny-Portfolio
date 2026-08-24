const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Danny. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;