import i18next from "i18next"

export const PAGE_LIMIT=12

export const isRTL=()=>{
  return  i18next.dir()==="rtl"
}