import BlockTransitImage from "../../components/blocktransitimage"; 

export default function TestingPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen pt-20">
            <div style={{ padding: "40px" }}>
                <BlockTransitImage src1="/profile_pic.jpg" src2="/profile_pic_2.jpg" rows={6} cols={6} />
            </div>
      </div>
    )
}