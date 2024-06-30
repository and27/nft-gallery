interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (args: { method: string }) => Promise<void>;
    on?: (event: string, handler: (...args: any[]) => void) => void;
  };
}
