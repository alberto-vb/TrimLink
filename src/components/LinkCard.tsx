import React from "react";
import { CopyLink } from "../../public/CopyLink";
import { EditLink } from "../../public/EditLink";
import { TrashBin } from "../../public/TrashBin";

export default function LinkCard() {
  return (
    <div className="flex flex-col space-y-1 p-3 border border-gray-150 rounded-md min-w-96">
      <header className="flex justify-between">
        <div>
          <span className="text-gray-500">/</span>
          <span className="font-medium text-lg">abcde</span>
        </div>
        <div className="flex space-x-3">
          <button>
            <CopyLink />
          </button>
          <button>
            <EditLink />
          </button>
          <button>
            <TrashBin />
          </button>
        </div>
      </header>
      <div className="text-gray-500">https://www.join-hypt.com</div>
      <footer className="flex flex-row-reverse text-gray-500">
        21 November, 2024
      </footer>
    </div>
  );
}
