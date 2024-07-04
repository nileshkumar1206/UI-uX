import java.util.*;
public class eligible{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int age=sc.nextInt();
        String vote=value(age);
        System.out.println(vote);
    }
    static String value(int age){
        if(age>18){
            return "Eligible";
        }
        else
        return "not eligible";
    } 
}