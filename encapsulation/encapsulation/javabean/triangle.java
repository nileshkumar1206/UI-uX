import java.util.*;
public class triangle {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        Boolean rs=isequilateral(a,b,c);
        if(rs)
        System.out.println("is equlateral");
        else
        System.out.println("not");

    }
    static Boolean isequilateral(int a,int b,int c){
        if(a==b && b==c && c==a)
        return true;
        else 
        return false;
    }
    
}
