import { atomWithStorage } from "jotai/utils"

export const filePathAtom = atomWithStorage<string | null>(
  "auto-file-path",
  null
)