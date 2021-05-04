import * as ts from 'typescript';
import * as fs from 'fs'
const printer: ts.Printer = ts.createPrinter();
const node = ts.createSourceFile(
    'x.ts',  
    fs.readFileSync('./check-params.ts', 'utf8'), 
    ts.ScriptTarget.Latest 
  );

console.log(node)

node.forEachChild(child => console.log(child))

  node.forEachChild(child => {
    if (ts.SyntaxKind[child.kind] === 'ClassDeclaration') {
      console.log(child)
    }
  });
