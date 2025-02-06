import { useUser } from '@repo/store/useUser';
import { Metadata, Player } from '../screens/Game';
import dawg1 from '../assets/images/dawg1.png';
import dawg2 from '../assets/images/dawg2.png';

interface UserAvatarProps {
  gameMetadata: Metadata | null;
  self?: boolean;
}

export const UserAvatar = ({ gameMetadata, self }: UserAvatarProps) => {
  const user = useUser();
  let player: Player;
  if (gameMetadata?.blackPlayer.id === user.id) {
    player = self ? gameMetadata.blackPlayer : gameMetadata.whitePlayer;
  } else {
    player = self ? gameMetadata?.whitePlayer! : gameMetadata?.blackPlayer!;
  }

  return (
    <div className="text-white flex gap-2 items-center ">
      <img src={dawg1} alt="" width={60} />
      <p className=" text-xl">{player?.name}</p>
      {player?.isGuest && <p className="text-gray-500">[Wallet Balance : 20M+ DAWGS ]</p>}
    </div>
  );
};
