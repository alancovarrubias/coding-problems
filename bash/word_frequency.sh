FILE=$1
while read LINE
do
  for WORD in $LINE
  do
    echo $WORD
  done
done < $FILE
