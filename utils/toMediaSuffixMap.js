const toMediaSuffixMap = new Array(process.env.NEXT_PUBLIC_CLIP_RECORD_COUNT)
  .fill()
  .map((_, i) => String(i));

export default toMediaSuffixMap;
