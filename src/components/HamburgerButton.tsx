// Thanks to Jesse Couch https://codepen.io/designcouch/pen/ExvwPY
import { useState } from 'preact/hooks';

type ComponentProps = {
  size: string;
}

type SpanProps = {
  class: string;
}

function Span(props: SpanProps) {
  return (
    <span class={`display-block position-absolute h-[12%] w-[100%] rounded-[999px] opacity-100 duration-250 ease-in-out bg-primary-500 ${props.class}`}></span>
  )
}

export default function HamburgerButton(props: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e: Event) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <button
      class="position-relative cursor-pointer w-[--size] h-[--size] rotate-0 duration-500 ease-in-out"
      style={{ '--size': props.size }}
      onClick={onClick}
    >
      <Span class={`${isOpen ? 'top-[44%] w-0 left-[50%]' : 'top-[10%] left-0'}`} />
      <Span class={`top-[44%] ${isOpen ? 'rotate-[45deg]' : 'rotate-0'}`} />
      <Span class={`top-[44%] ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`} />
      <Span class={`${isOpen ? 'top-[44%] w-0 left-[50%]' : 'top-[78%] left-0'}`} />
    </button>
  );
}