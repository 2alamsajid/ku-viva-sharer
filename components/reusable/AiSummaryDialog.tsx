'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

type Props = {
    year: string
    subject: string
}

const AiSummaryDialog = (props: Props) => {

    const { year, subject } = props
    const [isOpen, setIsOpen] = useState(false)
    const [answerMode, setAnswerMode] = useState(false)

    return (
        <div>
            <Button
                onClick={() => setIsOpen(true)}
                className="
                    bg-[#0079D3] text-white font-semibold cursor-pointer
                    px-4 py-2 rounded-md shadow-sm
                    hover:bg-[#0063B0] transition duration-200
                    focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                "
            >
                AI Summary
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px] bg-[#1A282D] text-[#D7DADC] border border-[#2A2A2A]">
                    <DialogHeader>
                        <DialogTitle className="text-white">AI Summary</DialogTitle>
                        <DialogDescription className="text-[#A5A5A5]">
                            AI will summarize the viva contents
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        {/* Switch component might need internal styling adjustments if it doesn't automatically inherit. */}
                        {/* Assuming shadcn/ui components adapt to parent styles or use CSS variables. */}
                        <Switch
                            id="answer-mode"
                            checked={answerMode}
                            onCheckedChange={setAnswerMode}
                            // You might need to add specific classNames for the switch if it doesn't inherit colors
                            // e.g., className="data-[state=checked]:bg-[#0079D3]"
                        />
                        <Label htmlFor="answer-mode" className="text-[#D7DADC]">Enable Answer Mode</Label>
                    </div>
                    <div className="text-sm text-[#A5A5A5]">
                        AI will summarize and also provide brief answers to the questions
                    </div>
                    <div className="flex justify-start mt-4">
                        <Button
                            onClick={() => setIsOpen(false)}
                            asChild
                            className="
                                bg-[#0079D3] text-white font-semibold
                                px-4 py-2 rounded-md shadow-sm
                                hover:bg-[#0063B0] transition duration-200
                                focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                            "
                        >
                            <Link href={`/${year}/${subject}/ai?am=${answerMode}`} target='_blank' >Generate Summary</Link>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AiSummaryDialog