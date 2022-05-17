function function1() {
    console.log('function1');
}
function function2() {
    console.log('function2'); // line 5 is uncovered.  Other require hook bumps it up to line 105.
    
    // Nyc must see the output of this hook; it must report line 105 in the coverage report.

    // If bug exists, coverage report will show line 5, (wrong) indicating that nyc's setter was disrupted. (bad, bug)

    // If bug has been *fixed*, then coverage report for *both* invocations will match and show line 105.
}
function1();
