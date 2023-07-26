import { useState } from 'preact/hooks';
import HamburgerButton from "@components/HamburgerButton";

type NavItemType = {
  title: string;
  url: string;
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e: Event) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const navItem: NavItemType[] = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Testimonials', url: '/testimonials' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' }
  ]

  return (
    <div class="ml-auto h-[100%] position-relative lg:position-static display-flex items-center">
      <ul
        class={`
          display-flex list-none font-900 flex-col items-end pl-12 pr-6 py-5
          position-absolute top-100px right-0
          bg-white rounded-2 shadow-md
          ease duration-[--duration]
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
          lg:position-static lg:flex-row lg:items-center lg:ml-auto lg:mr-3 lg:p-0 lg:bg-transparent lg:shadow-none
        `}
        style={{
          '--duration': `${navItem.length * 100 + 300}ms`
        }}
      >
        {navItem.map((i, idx, arr) => (
          <li
            class={`
              ${idx === 0 ? '' : 'mt-3'}
              transition-opacity,transform,visibility duration-[--duration] delay-[--delay] ease
              py-2 border-b-2 border-transparent text-cool-gray-700
              lg:mt-0 lg:mr-5 lg:hover:border-white lg:text-white
              ${isOpen ? 'translate-y-0 visible opacity-100' : 'translate-y-[-50px] invisible opacity-0'}
            `}
            style={{
              '--duration': `${((arr.length - idx - 1) * 100) + 300}ms`,
              '--delay': `${((arr.length - idx - 1) * 50) + 100}ms`
            }}
          >
            <a href={i.url}>{i.title}</a>
          </li>
        ))}
      </ul>
      <HamburgerButton size="36px" isOpen={isOpen} onClick={onClick} />
    </div>
  );
}
