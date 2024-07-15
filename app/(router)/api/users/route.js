import { NextResponse } from "next/server";

export function GET(request ) {
    const users=[{
        name:'durgesh tiwari',
        phone:'2332',
        course:"java"
    },
    {
        name: "abd boy",
        phone: "423423",
        course: "nextjs"
    },
    {
        name: " abcs sds",
        phone: "8293",
        course: "react js"
    }
];
return NextResponse.json(users);
}

export function POST() {

}

export function DELETE(){

}

