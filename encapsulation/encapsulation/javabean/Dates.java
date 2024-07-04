import java.util.Scanner;

public class Dates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter date (day): ");
        int D = sc.nextInt();
        System.out.println("Enter month: ");
        int M = sc.nextInt();
        System.out.println("Enter year: ");
        int Y = sc.nextInt();
        String validity = value(D, M, Y);
        System.out.println(validity);
        
        sc.close(); 
    }
    static String value(int D, int M, int Y) {
        if (Y < 1) {
            return "Invalid: Year must be greater than 0";
        }
        if (M < 1 || M > 12) {
            return "Invalid: Month must be between 1 and 12";
        }
        if (D < 1 || D > 31) {
            return "Invalid: Day must be between 1 and 31";
        }
        
        // Check days in month
        if ((M == 4 || M == 6 || M == 9 || M == 11) && D > 30) {
            return "Invalid: This month has only 30 days";
        }
        if (M == 2) {
            if (isLeapYear(Y)) {
                if (D > 29) {
                    return "Invalid: February in a leap year has only 29 days";
                }
            } else {
                if (D > 28) {
                    return "Invalid: February has only 28 days";
                }
            }
        }
        return "Valid";
    }

    static boolean isLeapYear(int year) {
        // Leap year is divisible by 4 and (divisible by 400 or not divisible by 100)
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
    }
}
