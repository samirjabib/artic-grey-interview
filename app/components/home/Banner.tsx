import {BackgroundVideo} from '../shared/BackgroundVideo';

export const Banner: React.FC = () => {
  return (
    <div className="relative h-[720px] sm:h-[920px]  w-full">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dsxn0nfhf/video/upload/v1731623398/artic-grey-video-test_eishcg.mp4"
        className="h-full"
        muted
        loop
        autoPlay
      />
      <div className="">
        <h1 className="text-4xl font-bold">Welcome to Arctic Grey</h1>
      </div>
    </div>
  );
};
