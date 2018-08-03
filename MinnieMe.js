function main() {
    var userInput = prompt("Enter a grade letter: ");

    switch (userInput) {
        case 'A':
            document.write("A: 90-100");
            break;

        case 'B':
            document.write("B: 80-89");
            break;

        case 'C':
            document.write("C: 70-79");
            break;

        case 'D':
            document.write("D: 60-69");
            break;

        case 'F':
            document.write("F: 60 and below");
            break;
    }
}

main();
