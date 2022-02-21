const bottomSentinel = document.querySelector('.qnYVzttodnzg9WdrVQ1p');
const bottomSentinelFirstChild = document.querySelector('.qnYVzttodnzg9WdrVQ1p > div:first-child');
const bottomSentinelSecondChild = document.querySelector('.IV3eOwLiJ909txXT98gs');

let iterations = 0;

const interval = setInterval(() => {
  if (iterations === 0) {
    bottomSentinel.style.height = "7844px"
    bottomSentinelFirstChild.style.height = "0px";
    bottomSentinelSecondChild.style.height = "calc(100% - 0px);";
  } else {
    bottomSentinel.style.height = "5846px"
    bottomSentinelFirstChild.style.height = "962px";
    bottomSentinelSecondChild.style.height = "calc(100% - 962px);";
  }
  iterations++;
  console.log(`iteration: ${iterations}`);

  if (iterations === 2) {
    clearInterval(interval);
  }
}, 400);