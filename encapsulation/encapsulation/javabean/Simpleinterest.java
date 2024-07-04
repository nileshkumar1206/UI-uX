import java.util.*;
public class Simpleinterest {
    public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    int P=sc.nextInt();
    int R=sc.nextInt();
    int T=sc.nextInt();
    double SI=simpleinterest(P, R, T);
    System.out.println(SI);
}
static double simpleinterest(int P,int R,int T){
   return (P*R*T)/100;
}
}