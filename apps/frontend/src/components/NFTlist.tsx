import Marquee from './ui/marquee';
import DAWGSNFT from '../images/DDAWGSNFT.png';
import DAWGSNFT1 from '../images/DDAWGSNFT1.png';
import DAWGSNFT2 from '../images/DDAWGSNFT2.png';
import DAWGSNFT3 from '../images/DDAWGSNFT3.png';
import DAWGSNFT4 from '../images/DDAWGSNFT4.png';
import DAWGSNFT5 from '../images/DDAWGSNFT5.png';
import DAWGSNFT6 from '../images/DDAWGSNFT6.png';
import DAWGSNFT7 from '../images/DDAWGSNFT7.png';
import DAWGSNFT8 from '../images/DDAWGSNFT8.png';
// import DAWGSNFT9 from '../images/DDAWGSNFT9.png';

const reviews = [
  {
    img: DAWGSNFT,
  },
  {
    img: DAWGSNFT1,
  },
  {
    img: DAWGSNFT2,
  },
  {
    img: DAWGSNFT3,
  },
  {
    img: DAWGSNFT4,
  },
  {
    img: DAWGSNFT5,
  },
  {
    img: DAWGSNFT6,
  },
  {
    img: DAWGSNFT7,
  },
  {
    img: DAWGSNFT8,
  },
];

console.log(DAWGSNFT);

const firstRow = reviews.slice(0, reviews.length / 1);

const ReviewCard = ({ img }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure>
      <img className="rounded-lg" width="150" height="150" alt="" src={img} />
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <Marquee pauseOnHover={false} vertical={false} className="[--duration:20s] w-full mt-24">
      {firstRow.map((review) => (
        <ReviewCard key={review.img} img={review.img} name="" username="" body="" />
      ))}
    </Marquee>
  );
}
