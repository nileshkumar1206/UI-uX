import java.util.*;
public class negativepostive {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int x=sc.nextInt();
        String NorP=value(x);
        System.out.println(NorP);
    }
    static String value(int x){
        if(x>0){
            return "positive";
        }
        else{
        return "negative";
        }

    }
}
