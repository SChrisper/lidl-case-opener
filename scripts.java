import java.util.Random;

public class scripts {
    public static void main(String[] args) {
        Random rand = new Random();

        int randomnumber = rand.nextInt(10000);

        if (randomnumber < 5000) {
            int ranblue = rand.nextInt(3);
            switch (ranblue) {
                case 0:
                    System.out.println("bul1");
                    break;
                case 1:
                    System.out.println("bul2");
                    break;
                case 2:
                    System.out.println("bul3");
                    break;
                default:
                    throw new AssertionError();
            }
        } else if (randomnumber < 7000) {
            int ranpurple = rand.nextInt(3);
            switch (ranpurple) {
                case 0:
                    System.out.println("pupel1");
                    break;
                case 1:
                    System.out.println("pupel2");
                    break;
                case 2:
                    System.out.println("pupel3");
                    break;
                default:
                    throw new AssertionError();
            }
        } else if (randomnumber < 8000) {
            int ranpink = rand.nextInt(2);
            switch (ranpink) {
                case 0:
                    System.out.println("pik1");
                    break;
                case 1:
                    System.out.println("pik2");
                    break;
                default:
                    throw new AssertionError();
            }
        } else if (randomnumber < 9000) {
            System.out.println("red");
        } else if (randomnumber < 9900) {
            System.out.println("gold gold gold");
        }
    }
}
