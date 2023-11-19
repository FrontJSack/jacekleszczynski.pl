import { JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);
  
  const messages = [
    "“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.” ~ Me",
    "“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.” ~ Isaac Asimov",
    "The fool doth think he is wise, but the wise man knows himself to be a fool. ~ William Shakespeare [Unclick to close]",
    "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).” ~ Mark Twain",
    "“Knowing yourself is the beginning of all wisdom.” ~ Aristotle",
    "“When someone loves you, the way they talk about you is different. You feel safe and comfortable.” ~  Jess C. Scott",
    "“The only true wisdom is in knowing you know nothing.”",
    "“Count your age by friends, not years. Count your life by smiles, not tears.” ~ John Lenon",
    "“Never laugh at live dragons.” ~ J.R.R. Tolkien",
    "“Never let your sense of morals prevent you from doing what is right.” ~ Isaac Asimov, Foundation",
    "“The unexamined life is not worth living.” ~ Socrates",
    "“Turn your wounds into wisdom.” ~ Oprah Winfrey",
    "“Angry people are not always wise.” ~ Jane Austen, Pride and Prejudice",
    "Let no man pull you so low as to hate him. ~ Martin Luther King Jr.",
    "“The man of knowledge must be able not only to love his enemies but also to hate his friends.” ~ Friedrich Nietzsche",
    "“The measure of intelligence is the ability to change.” ~ Albert Einstein",
    "“You will do foolish things, but do them with enthusiasm.” ~ Colette",
    "“Failure is the condiment that gives success its flavor.” ~ Truman Capote",
    "“Knowledge speaks, but wisdom listens” ~ Jimi Hendrix",
    "“You yourself, as much as anybody in the entire universe, deserve your love and affection.” ~ Sharon Salzberg",
    "“Even strength must bow to wisdom sometimes.” ~ Rick Riordan, The Lightning Thief",
    "“He who knows all the answers has not been asked all the questions.” ~ Confucius",
    "“Music is ... A higher revelation than all Wisdom & Philosophy” ~ Ludwig van Beethoven",
    "“Wonder is the beginning of wisdom.” ~ Socrates",
    "“Any fool can know. The point is to understand.” ~ Albert Einstein",
  ];

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-4/2 -translate-x-1/2 -translate-y-32 mt-1 w-auto max-h-[400px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
          <p style="max-width: 250px;" class="w-max text-xs md:text-xm">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
