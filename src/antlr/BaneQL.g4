grammar BaneQL;

query
    : ( changeMode | union ) selectProperties? EOF
    ;

union
    : expressionBegins ( expressionBegins )*
    ;

expressionBegins
    : matchers ( expressionContinuation )*
    ;

changeMode
    : '>' ( expressionContinuation )* # Outgoing
    | '<' ( expressionContinuation )* # Incoming
    ;

expressionContinuation
    : inclusive
    | exclusive
    | filterFunction
    | changeMode
    ;

filterFunction
    : 'fromasp' '(' methodCallArguments ')' # FromAsp
    | 'toasp' '(' methodCallArguments ')' # ToAsp
    | 'pivot' '(' methodCallArguments ')' # Pivot
    | 'zonefam' '(' methodCallArguments ')' # ZoneFam
    | 'zone' '(' methodCallArguments ')' # Zone
    | 'subs' '(' methodCallArguments ')' # Subs
    ;

selectProperties
    : 'cols' '(' methodCallArguments ')'
    ;

inclusive
    : '+' matchers
    ;

exclusive
    : '-' matchers
    ;

matchers
    : methodCall # matchMethodCall
    | valueSelection # matchValueSelection
    | equalitySelection # matchEqualitySelection
    | gteSelection # matchGteSelection
    | lteSelection # matchLteSelection
    | PROPERTY # matchProperty
    | NUMBER # matchNumber
    ;

valueSelection
    : EMAIL # Email
    | DOMAINNAME_OR_IP # DomainOrIP
    | LITERAL_VALUE # Literal
    ;

methodCall
    : PROPERTY '(' methodCallArguments ')'
    ;

methodCallArguments
    : // No arguments
    | argument (',' argument )*  // Some arguments
    ;

argument
    : equalitySelection
    | PROPERTY
    | STRING
    | NUMBER
    ;

equalitySelection
    : PROPERTY '=' rawValue
    ;

gteSelection
    : PROPERTY '>=' NUMBER
    ;

lteSelection
    : PROPERTY '<=' NUMBER
    ;

rawValue
    : STRING # String
    | NUMBER # Number
    | PROPERTY # PropertyLikeValue
    | LITERAL_VALUE # LiteralValue
    ;

PROPERTY
    : [a-zA-Z/.*_][a-zA-Z0-9.:/$*_]*
    ;

LITERAL_VALUE
    : [0-9]+[a-zA-Z./*:]+[:a-zA-Z0-9./$*]*
    ;

EMAIL
    : USERNAME+ '@' DOMAIN+ ( '.' DOMAIN+ )+
    ;

DOMAINNAME_OR_IP
    : DOMAIN+ ('.' DOMAIN+ )+
    ;

fragment USERNAME: [a-zA-Z0-9_.+-] ;
fragment DOMAIN: [_a-zA-Z0-9-] ;

STRING
    : '"' ('\\"'|.)*? '"'
    ;

NUMBER
    : [0-9]+
    ;

// WS represents a whitespace, which is ignored entirely by skip.
WS
    : [ \t\u000C\r\n]+ -> skip
    ;
