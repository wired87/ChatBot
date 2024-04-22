
interface LottieOptions {
  loop: boolean;
  autoplay: boolean;
  animationData: object;
  rendererSettings: {
    preserveAspectRatio: string;
  }
}

export const defaultOptions = (animationData: object):LottieOptions  => {
  return {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
};