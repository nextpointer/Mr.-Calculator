const OutPutDownloadButtton = ({
  calculateOutput,
}: {
  calculateOutput: string;
}) => {
  const file = new Blob([calculateOutput], { type: "text/plain" });
  return (
    <button class="btn" style={{backgroundColor:"#F7C30E",width:"80px",cursor:"pointer"}}>
      <a
      style={{width:"77px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius: "25px"}}
        download="output.txt"
        target={"_blank"}
        rel="noreferrer"
        href={URL.createObjectURL(file)}
      ><img src="/assets/download.svg" alt="Download" /></a>
    </button>
  );
};

export default OutPutDownloadButtton;
