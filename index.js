let fileInput = document.querySelector("input");
let downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText="Downloadind file..."
  fetchFile(fileInput.value);

});
function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTeg = document.createElement("a");
      aTeg.href = tempUrl;
      aTeg.download = "filename";
      aTeg.download = url.replace(/^.*[\\\/]/, '')
      document.body.appendChild(aTeg);
      aTeg.click();
      aTeg.remove();
      URL.revokeObjectURL(tempUrl)
      downloadBtn.innerText="Download File"
    }).catch(() => {
      downloadBtn.innerText="Download File"
      alert('Failed to downloed file!' )

    })
}
