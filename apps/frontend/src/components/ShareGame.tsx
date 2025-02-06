import { useState } from 'react';
import { Button } from './Button';

export const ShareGame = ({ className, gameId }: { className?: string; gameId: string }) => {
  const url = window.origin + '/game/' + gameId;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    window.navigator.clipboard.writeText(url);
    setCopied((p) => true);
  };

  return (
    <div className={`flex flex-col items-center gap-y-4 ${className}`}>
      <div className="flex items-center gap-x-2 mx-4">
        <div onClick={handleCopy} className="text-[#b7722d] text-center cursor-pointer">
          {url}
        </div>
      </div>

      <Button onClick={handleCopy}>{copied ? `Copied to Clipboard !!` : `Copy the link`}</Button>
    </div>
  );
};
