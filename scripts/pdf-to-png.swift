// Rasterise every page of a PDF to PNG, to check pagination without opening a viewer.
//
//   swift scripts/pdf-to-png.swift cv.pdf preview [scale]
//   -> preview-p1.png, preview-p2.png, ...
//
// Uses CoreGraphics only; no dependencies to install.
import Foundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let url = URL(fileURLWithPath: args[1]) as CFURL
let outPrefix = args[2]
let scale: CGFloat = args.count > 3 ? CGFloat(Double(args[3])!) : 1.5
guard let doc = CGPDFDocument(url) else { exit(1) }
for i in 1...doc.numberOfPages {
    guard let page = doc.page(at: i) else { continue }
    let r = page.getBoxRect(.mediaBox)
    let w = Int(r.width * scale), h = Int(r.height * scale)
    let cs = CGColorSpaceCreateDeviceRGB()
    let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8,
                        bytesPerRow: 0, space: cs,
                        bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue)!
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
    ctx.scaleBy(x: scale, y: scale)
    ctx.drawPDFPage(page)
    let img = ctx.makeImage()!
    let out = URL(fileURLWithPath: "\(outPrefix)-p\(i).png")
    let dest = CGImageDestinationCreateWithURL(out as CFURL, UTType.png.identifier as CFString, 1, nil)!
    CGImageDestinationAddImage(dest, img, nil)
    CGImageDestinationFinalize(dest)
    print(out.path)
}
