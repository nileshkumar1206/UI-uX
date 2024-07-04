import java.util.*;
public class Biggestamong3 {
    public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    int a=sc.nextInt();
    int b=sc.nextInt();
    int c=sc.nextInt();
   int isgreatest=largest(a,b,c);
    System.out.println(isgreatest);
}
 static int largest(int a,int b,int c){
 if(a>b && a>c){
    return a;
 }
else if(b>c && b>a){
return b;
}
else

return c;
 }
}