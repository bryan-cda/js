let word = "my name is Dexter, Dexter Morgan";

const rgx = /dexter|morgan/i;
const seen = rgx.test(word);
const regExpressions = /dexter/gi;

word.match(rgx);
regExpressions.test(word);
word.match(regExpressions);