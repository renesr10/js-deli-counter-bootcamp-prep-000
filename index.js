function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0)
  return `Currently serving ${katzDeliLine.shift()}.`; else return 'There is nobody waiting to be served!';
} 

function currentLine(katz) {
  if (katz.length === 0) {
    return "The line is currently empty.";
  } else {
    var newKatz = [];
    for(var i = 0; i < katz.length; i++)
    newKatz.push(` ${i+1}. ${katz[i]}`);
} return 'The line is currently:' + newKatz;
}