import java.util.Scanner;

public class number {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        
        for (int i = 1; i <= x; i++) {
            System.out.println(i);
        }
        
        sc.close(); // Always good practice to close the Scanner
    }
}
