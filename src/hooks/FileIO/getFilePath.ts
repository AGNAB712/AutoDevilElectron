import {atom, useSetAtom} from "jotai";
import { filePathAtom } from "./filePathAtom"

export const filepathQueryAtom = atom(
  null,
  async (_, set, _payload?: UploadPayload) => {
    const filePath = await window.electronAPI.openFile()

    if (!filePath) {
      return
    }

    set(filePathAtom, filePath)
  }
)
export default function getFilePath() {
    return useSetAtom(filepathQueryAtom);
}